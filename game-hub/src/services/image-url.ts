const getCroppeddImageUrl = (url: string) => {
  const target = "media/";
    const index = url.indexOf(target) + target.length;
  return url.slice(0,index+6)+"crop/600/400" + url.slice(index);
}
export default getCroppeddImageUrl;