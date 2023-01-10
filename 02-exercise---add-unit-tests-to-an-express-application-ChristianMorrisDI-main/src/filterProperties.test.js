const properties = require("./properties.json");

const filterProperties = require("./filterProperties.js")

describe ("filterProperties", () => {
    it("should only display false properties", () => {

      const result = filterProperties(properties);
        const expected = [properties[0], properties[2]];
        
        expect(result).toEqual(expected);
    });
});