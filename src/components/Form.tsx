import React from "react"

const Form = () => {
    return (
        <>
            <form action="#" data-testid="form-component">
                <input type="button" id="fail4" aria-labelledby="emptydiv" data-testid="Input component" />
                <div id="labeldiv">Button label</div>
                <div id="emptydiv"></div>
            </form>

        </>
    )
}

export default Form