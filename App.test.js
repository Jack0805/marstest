import solution from './solution';


describe('group of test suits', () => {
 
  describe('test outputs of solution', () => {
    it('should return an array', () => {
      expect(Array.isArray(solution([5,5],[['12N','LMLMLMLMM'], ['33E','MMRMMRMRRM']]))).toBe(true);
    })
    it('should return an array with strings represented the final position of each rover', () => {
      expect(solution([5,5],[['12N','LMLMLMLMM'], ['33E','MMRMMRMRRM']])).toEqual(["13N","51E"]);
    })
    it('should not move beyond the border', () => {
      expect(solution([5,5],[['12N','LMLMLMLMMLMM'], ['33E','MMRMMRMRRM']])).toEqual(["03W","51E"]);
    })
  });

})

// could do more tests in a comprehensive react poject, for example:
//we have a web interface to allow users to input 1. siez of platform 2. A group of rovers having original position and control letters for each.
//In this case we will use a form to accept the inputs, so we can use something like:
//wrapper.find('form#addRoverTasks').first().simulate('submit');
//to check we store the correlated values into states (mock states in wapper) and pass to the function, we also may test how many rovers we added.

//other tests include:
//1 test the outputs on screen are rendered correctly.
//2 The web app UI renders without problems.
//3 any css styles className are given correctly.

