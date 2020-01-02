import React from 'react'
import { Text, Button } from 'react-native'
import { connect } from 'react-redux'
 
function Login({logged, jwt, logar}) {
    return(
        <>
            <Text>{logged ? `jwt: ${jwt} logado` : 'nao logado'}</Text>
            <Button title="jovem dex" onPress={() => logar(123)} />
        </>
    )
}
 
const mapStateToProps = state => ({
    logged: state.login.logged,
    jwt: state.login.jwt
})

const mapDispatchToProps = dispatch => ({
    logar: function(jwt) {
        dispatch({type: 'logar', jwt})
    }
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Login)