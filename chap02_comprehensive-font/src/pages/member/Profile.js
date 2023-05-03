import RegisterCSS from "./Register.module.css";

function Profile() {

    return(
        <>
            <div className={ RegisterCSS.backgroundDiv }
            style={ {backgroundColor : 'white '}}
            >
                <div className={RegisterCSS.registerDiv}>
                    <h1>내 정보</h1>
                    <input 
                        type="text"
                        readOnly={true}
                        />
                       
                    <input 
                        type="text"
                        readOnly={true}
                        />

                    <input 
                        type="text"
                        readOnly={true}
                        />

                </div>

            </div>
        </>
    )

    
}

export default Profile;