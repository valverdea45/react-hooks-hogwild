import React from "react";

function FilteredHogs({ handleChange, selectedCatigory }) {
    return (
        <div>
            <select value={selectedCatigory} name="filter" onChange={handleChange}>
                <option value="All">All</option>
                <option value="greased">Greased Hogs</option>
                <option value="not greased" >Not Greased Hogs</option>
                <option value="By Name">By Name</option>
                <option value="By Weight">By Weight</option>
            </select>
        </div>
    )
}

export default FilteredHogs;