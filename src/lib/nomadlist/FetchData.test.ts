import { cleanURL } from "./FetchData";


describe("cleanURL function", () => {
    it("should return an empty string if the input is undefined", () => {
        expect(cleanURL(undefined)).toEqual("");
    });

    it("should return a cleaned URL if the input is a valid URL", () => {
        const input = "https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100/https://nomadlist.com/assets/img/places/yokohama-japan.jpg?1665448488";
        const expectedOutput = "https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=320/https://nomadlist.com/assets/img/places/yokohama-japan.jpg?1665448488";
        expect(cleanURL(input)).toEqual(expectedOutput);
    });

    it("should return a cleaned URL if the input is a valid URL with multiple 'https://'", () => {
        const input = "https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100/https://nomadlist.com/assets/img/places/https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=25/https://nomadlist.com/assets/img/places/japan.jpg?1679792903.jpg?";
        const expectedOutput = "https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=320/https://nomadlist.com/assets/img/places/japan.jpg?1679792903";
        expect(cleanURL(input)).toEqual(expectedOutput);
    });

    it("should return a cleaned URL if the input is a valid URL with multiple 'https://'", () => {
        const input = "https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=100,height=100/https://nomadlist.com/assets/img/places/https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=25/https://nomadlist.com/assets/img/places/spain.jpg?1679620242";
        const expectedOutput = "https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=320/https://nomadlist.com/assets/img/places/spain.jpg?1679620242";
        expect(cleanURL(input)).toEqual(expectedOutput);
    });

    it("should return a cleaned URL if the input is a valid URL with 'width=100,height=100'", () => {
      const input = "https://example.com/image.jpg?width=100,height=100";
      const expectedOutput = "https://example.com/image.jpg?width=250,height=320";
      expect(cleanURL(input)).toEqual(expectedOutput);
    });

    it("should return the input if it is not a valid URL", () => {
        const input = "not a valid URL";
        expect(cleanURL(input)).toEqual(input);
    });
});