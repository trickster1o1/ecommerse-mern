export const getBanners = async (setBanners: any) => {
    await fetch(`http://localhost:3001/api/movies/banners`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setBanners(res.banners);
        }
      })
      .catch((e) => console.log(e));
}


export const getMovies = async (setMovies: any) => {
    await fetch(`http://localhost:3001/api/movies`)
    .then(res=>res.json()).then(res=>{
        if(res.success) { setMovies(res.movies); }
    }).catch(err=>console.log(err));
}