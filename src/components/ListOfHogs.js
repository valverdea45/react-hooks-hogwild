import React, { useState } from "react";
import Hog from "./Hog"
import FilteredHogs from "./FilteredHogs";

function ListOfHogs({ allHogs }) {

    //     const testObj = [
    //     { name: "valerie" },
    //     { name: "adrian" },
    //     { name: "daniel" }
    // ]

    //     const sorted = testObj.sort((a, b) => {
    //         if (a.name < b.name) {
    //             return -1
    //         }
    //         if (a.name > b.name) {
    //             return 1
    //         }
    //         return 0
    //     })

    //     console.log("here bro!", sorted)

//     if (selectedCatigory === 'greased') return hog.greased
// if (selectedCatigory === 'not greased) return !hog.greased



    const [selectedCatigory, setSelectedCatigory] = useState("All")

    const hogsToDisplay = allHogs.filter((hog) => {
        if (selectedCatigory === "greased") {return hog.greased}
        if (selectedCatigory === "not greased") {return !hog.greased}
        // if (selectedCatigory === "All") { return true } 
        // if (selectedCatigory === "By Name") {return sortingByName() }
        // if (selectedCatigory === "By Weight") {return sortingByWeight()}
        // if (selectedCatigory === hog.greased.toString()){return true}
        return true
    }).sort((a, b) => {
        if (selectedCatigory === "By Name") {
            return a.name.localeCompare(b.name);
        } else if (selectedCatigory === "By Weight"){
            return a.weight - b.weight
        }
    })

    console.log(hogsToDisplay)

    function handleChange(e) {
        setSelectedCatigory(e.target.value)
    }

    // function sortingByName() {
    //     const sortedHogs = allHogs.sort((a, b) => {
    //         if (a.name < b.name) {
    //             return -1
    //         }
    //         if (a.name > b.name) {
    //             return 1
    //         }
    //         return 0
    //     })
    //     return sortedHogs
    // }

    // function sortingByWeight() {
    //     const sortedHogs = allHogs.sort((a, b) => {
    //         return a.weight - b.weight
    //     })
    //     return sortedHogs
    // }

    const listOfHogs = hogsToDisplay.map((individualHog) => {

        return (
            <div>
                <Hog hog={individualHog} />
            </div>
        )
    })



    return (
        <div>
            <FilteredHogs handleChange={handleChange} selectedCatigory={selectedCatigory} />
            {listOfHogs}
        </div>
    )
}

export default ListOfHogs