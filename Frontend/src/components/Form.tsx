const Form: React.FC = ()=>{
    console.log("Form component rendered");

    return (
        <form className="reflection-form">
            <div className="form-group">
                <label htmlFor="reflection-text">
                    How are you feeling today?
                </label>
                <textarea 
                    id="reflection-text" 
                    placeholder="I fell nervous today"
                    rows={4}
                    className="reflection-textarea">
                </textarea>
            </div>

            <button
                type="submit"
                className="submit-button">
                    Analyze my reflection
            </button>
        </form>
    )
}

export default Form;