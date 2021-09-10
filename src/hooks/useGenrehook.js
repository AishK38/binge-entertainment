const useGenrehook = (selectGenres) => {
   if(selectGenres.length<1) return "";

   const GenreIDs = selectGenres.map((g) => g.id);
    return GenreIDs.reduce((acc, curr) => acc+','+curr);
};

export default useGenrehook;