function Newform () {
    return (
        <form>
            <h2 className="label-wrapper">
                <label for="username" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="username"
                className="input input__lg"
                name="text"
                autoComplete="off"
            />
            <button type="submit">
                Add
            </button>
        </form>
    );
}

export default Newform;