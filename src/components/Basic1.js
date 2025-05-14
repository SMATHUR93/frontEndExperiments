import { useState } from "react";

const Basic1 = () => {

    /**
     * Example 1
     */
    var sum = new function (var1, var2) {
        return var1 + var2;
    } ̰
    var ans = sum(1, 2);
    console.log(ans);

    /**
     * Example 2
     */
    var sum = function (var1) {
        return function (var2) {
            return var1 + var2;
        };
    }
    var ans = sum(1, 2);
    console.log(ans);

    /**
     * Example 3
     */
    var sum = function (var1) {
        return function (var2) {
            return var1 + var2;
        };
    }
    var ans = sum(1)(2);
    console.log(ans);

    /**
     * Example 4
     */
    for (var i = 0; i < 3; i++) {
        setTimeout(function (i) {
            console.log(i);
        }, 100);
    }

    /**
     * Example 5
     */
    for (var i = 0; i < 3; i++) {
        setTimeout(function (i) {
            return console.log(i);
        }, 100);
    }

    /**
     * Example 6
     */
    function callInTime(i) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    for (var i = 0; i < 3; i++) {
        callInTime(i);
    }

    /**
     * Example 7
     */
    for (var i = 0; i < 3; i++) {
        ((i) => {
            setTimeout(() => console.log(i), 100);
        })(i);
    }

    return (
        <div class="container text-center">
            <div class="row justify-content-md-center">
                <div class="col">
                    <br />
                    <h2>Basic1</h2>
                    <br />
                </div>
            </div>
        </div>
    );
}
export default Basic1;