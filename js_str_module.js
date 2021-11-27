module.exports = {
   CapitalCase: function(sentence){
      sentence = sentence.toLowerCase();
      let str = sentence.split(' ');

      for(let i = 0; i < str.length; i++){
         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }

      str = str.join(' ');
      return str;
   },

   Repeater: function (str, num){
      let ans = "";
      for(let n = 0; n < num; n++){
         ans = ans.concat(str) + '-';
      }
      return ans;
   },

   CheckLtr: function (word, ltr){
      return (word.indexOf(ltr) != -1)? 1 : 0;
   },

   CheckLastLtr: function(word, ltr){
      return (word.charAt(word.length - 1) === ltr)? 1 : 0;
   },

   Reverser: function (str){
      let temp = "";
      for(let i = 1; i <= str.length; i++){
         temp += str[str.length-i];
      }
      return temp;
   },

   LongestWord: function (sentence){
      sentence = sentence.split(' ');
      longestWord = {
         length: 0,
         word: "",
      }
      for(let i = 0; i < sentence.length; i++){
         if(sentence[i].length > longestWord.length ){
            longestWord.length = sentence[i].length;
            longestWord.word = sentence[i];
         }
      }
      return longestWord;
   }
}
