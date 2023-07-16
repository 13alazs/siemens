const WordCountUtil = {
  countWords: (str) => (str.trim().match(/\S+/g) || []).length,
};

export default WordCountUtil;
