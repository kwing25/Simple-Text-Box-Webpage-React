import React from 'react';

const useStickyState = (key = "sticky", initialState = null) => {
    const [state, setState] = React.useState(() => {
        const storedState = localStorage.getItem(key);

        return storedState ?? initialState;
    });

    React.useEffect(() => {
        localStorage.setItem(key, state);
    });

    return [state, setState];
};

export default function TextBox() {

    const [value, setValue] = useStickyState(
        "sticky",
        "Type in Me!"
    );

    return (
        <div className="textbox" >

            <div class="form-floating">
                <textarea type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)} class="form-control" placeholder="Type in Me!" id="textareainput"></textarea>
            </div>

        </div>
    )
}