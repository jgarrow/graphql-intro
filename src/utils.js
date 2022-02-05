const getId = (url) => {
    const urlArr = url.split('/');
    return Number(urlArr[urlArr.length - 2]);
}

module.exports = { getId }