const truncate = (longString: string, limit = 10) => {
  if (longString.length > limit) {
    return longString.substring(0, limit) + '...';
  }

  return longString;
};

export default truncate;
