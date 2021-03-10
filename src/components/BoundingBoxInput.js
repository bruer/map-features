import React from 'react'
import "./BoundingBoxInput.css"

function BoundingBoxInput({ boundingBox, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="left">Minimun Longitude</label>
            <input type="text" name="left" id="left" placeholder="left side" value={boundingBox.left} onChange={handleChange} />

            <label htmlFor="bottom">Minimun Latitude</label>
            <input type="text" name="bottom" id="bottom" placeholder="bottom side" value={boundingBox.bottom} onChange={handleChange} />

            <label htmlFor="right">Maximum Longitude</label>
            <input type="text" name="right" id="right" placeholder="right side" value={boundingBox.right} onChange={handleChange} />

            <label htmlFor="top">Maximum Latitude</label>
            <input type="text" name="top" id="top" placeholder="top side" value={boundingBox.top} onChange={handleChange} />

            <input type="submit" value="show GeoJSON data" />
        </form>
    )
}

export default BoundingBoxInput
