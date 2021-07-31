"use strict";
        
class User {
    url = null;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * @see https://regex101.com/r/yYScrb/1
     */
    set vkUrl(url) {
        if (/^https?.*/gm.test(url)) {
            this.url = url;
        } else {
            throw new Error("Passed invalid url value: " + url);
        }
    }
}

const user1 = new User('Alice', 25);
user1.vkUrl = 'https://vk.com/test';
debugger;
// Uncaught Error: Passed invalid url value: hello world
user1.vkUrl = 'hello world';
debugger;