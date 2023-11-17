// Description: This file contains the custom styles for the application.
// Font size of headings: 32px
// • All other font size: 16px
// • Font family: Poppins
// • Screen background: 030303
// • Font colour: FFFFFF

// • Radio button background colour: FFFFFF
// • Selected radio button colour: 6741D9
// • Text field/Input field border: FFFFFF

// • Graph bars colour: F0C3F1
// • Bar axis and markings colour: FFFFFF
// • Save button background: 6741D9
// • Hover on Save button: Border becomes active, F0C3F1, 1px.
// • Click on Save button: Border becomes active, F0C3F1, 1px.
// • Width for
// Website: www.dhunjam.in Email: groove@dhunjam.in 3 | P a g e
// a) Headings- 600px, justify centre.
// b) Fields on Screen 1 and Screen 2- 600px.
// c) Login, Sign up, Save button- 600px, justify, centre.
// d) Graph container- 600px
// • Width for all other elementsa) Maximum- 300px
// b) Minimum- Fit to size.
// • Greyed out fieldsa) Greyed out radio button background- C2C2C2
// b) Greyed out text/input fields: Colour of border and value present changes to C2C2C2

const styles = {
    body: {
        background: "#030303",
        fontFamily: "Poppins",
        color: "#FFFFFF",
        fontSize: "16px",
        height: '100%',
        width: '100%',
        margin: 0,
    },
    h1: {
        fontSize: "32px",
        textAlign: "center",
    },
    input: {
        border: "1px solid #FFFFFF",
        background: 'transparent',
        borderRadius: "10px",
        padding: "5px",
        height: "30px",
        color: '#FFFFFF',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center',
    },
}

export default styles;