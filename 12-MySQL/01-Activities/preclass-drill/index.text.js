describe('drill 1', () => {
    it('test case 1', () => {
        const result = preClassDrill1([1,2,3]);
        expect(result).toBe([2,4,6]);
    });
    it('test case 2', () => {
        const result = preClassDrill1([-1,-2,-3]);
        expect(result).toBe([-2,-4,-6])
    })
})

describe('drill 2', () => {
    it('case 1', () => {
        const cbFn = function(num){return num *2};
        const result = preClassDrill29([1,2,3], cbFn)
        expect(result).toEqual([2,4,6])
    })
    it('case 2', () => {
        const cbFn = function(num){return num *2};
        const result = preClassDrill29([1,2,3], cbFn)
        expect(result).toEqual([2,3,4])
    })
    it('case 3', () => {
        const cbFn = function(num){return num *2};
        const result = preClassDrill29([1,2,3], cbFn)
        expect(result).toEqual([.5,1,1.5])
    })
    it('case 4', () => {
        const cbFn = function(num){return num *2};
        const result = preClassDrill29([1,2,3], cbFn)
        expect(result).toEqual([-2,-4,-6])
    })
})