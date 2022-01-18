 // All...
// http://rosalind.info/problems/dna/
// http://rosalind.info/problems/rna/
// http://rosalind.info/problems/revc/
// http://rosalind.info/problems/hamm/
// One...
// http://rosalind.info/problems/subs/
// http://rosalind.info/problems/prot/
// http://rosalind.info/problems/gc/
const DNA_STRING_FOR_dna = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC";
const DNA_STRING_FOR_rna = "GATGGAACTTGACTACGTAAATT" ;
const DNA_STRING_FOR_revc = "AAAACCCGGT";
const DNA_STRING_1_FOR_hamm = "GAGCCTACTAACGGGAT";
const DNA_STRING_2_FOR_hamm = "CATCGTAATGACGGCCT";
const DNA_STRING_FOR_subs = "GATATATGCATATACTT";
const DNA_SUBSTRING_FOR_subs = "ATAT";
const RNA_STRING_FOR_prot = "AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA";

function problem_dna() {
   console.log( "doing problem_dna");

  let counts = nucleotideCountsOf(DNA_STRING_FOR_dna);
  drawDNAString(DNA_STRING_FOR_dna,0,0,width);
  drawCounts(counts);
  pieChart(width/2, height/2, width/4, counts);
}

function problem_rna() {
 console.log( "doing problem_rna");
  let newRNA = DNA_STRING_FOR_rna.replace(/T/g, 'U');
  drawDNAString(DNA_STRING_FOR_rna,0,0,width);
  // visualization
  text(newRNA, 0, 200);  
}

function problem_revc() {
 console.log( "doing problem_revc");
  let revc = DNA_STRING_FOR_revc
  drawDNAString(DNA_STRING_FOR_revc,0,0,width);
  revc = Array.from(revc).reverse().join('');
  text(revc, 150,350);

}

function problem_hamm() {
  console.log( "doing problem_hamm");
  const str1 = DNA_STRING_1_FOR_hamm
  const str2 = DNA_STRING_2_FOR_hamm
  const hammingDistance = (str1 = '', str2 = '') => {
    if (str1.length !== str2.length) {
      return 0;
   }
   let dist = 0;
   for (let i = 0; i < str1.length; i += 1) {
      if (str1[i] !== str2[i]) {
         dist += 1;
      };
   };
   return dist;
   };
   text('Hamming distance:', 50,150)
   text(hammingDistance(str1, str2), 530, 150);
   
   console.log(hammingDistance(str1, str2))};
   let drawHelpText = true;
   let helpText = [
  "Hamming Distance",
    


];   

function problem_subs() {
//    console.log("doing problem_subs");
 
   const str3 = "GATATATGCATATACTT";
   const sub = "ATAT"
   const indices = [];
//   var regex = /ATAT/gi, result, indices = [];
//   while ( (result = regex.exec(str3)) ) {
//     indices.push(result.index+1);
// }
// console.log(indices) // => [2, 25, 27, 33]

// var regex = /ATAT/gi, result, indices = [];
// while ( (result = regex.exec(str3)) ) {
//     indices.push(result.index + 1);
// }
// console.log(indices) 
  let fromIndex = 0;
  while( str3.indexOf(sub, fromIndex) !== -1 ) {
    const i = str3.indexOf(sub, fromIndex);
    indices.push(i+1);
    fromIndex = i+1;
  }

  console.log(indices) 
}






  
 

   


function problem_prot() {

}

function problem_gc() {
  
}
