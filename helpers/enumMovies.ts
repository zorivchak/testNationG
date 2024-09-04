export const enumMovies = {
    Name1: 'Name1',
    Name2: 'Name2',
    Name3: 'Name3',
    Name4: 'Name4',
    Name5: 'Name5',
    Name6: 'Name6',
    Name7: 'Name7',
    Name8: 'Name8',
    TheRiseAndFallOfTheMaya: 'The Rise and fall of the Maya',
    Name10: 'Name10',
  }

  export function getMovieIndex(movieName: string){
    let index = 0;
    switch (movieName){
        case 'The Rise and fall of the Maya': index = 9;
        default: console.log('error');
    }
    return index;
  }