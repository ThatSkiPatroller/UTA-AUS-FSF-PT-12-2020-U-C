const FileIO = require('../fileIO');
const fs = require('fs');

jest.mock("fs");

fdescribe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const files = new FileIO; 
      const filename = "readme.md";
      expect (files).toEqual(undefined);
      fs.readFileSync.mockReturnValue(
        new Promise(function(resolve) {
          resolve({ data: "" });
        })
      );

      expect(movie.search(name)).resolves.toEqual({ data: {} });
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});
