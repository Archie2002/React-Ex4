import React from 'react'
import CompoB from './compoB'
import { UserProvider } from './userContext'

function CompoA() {

    let fun = (a, b) => {
        return a+b
    }
    return (
        <div>
            <UserProvider value={fun(10,20)}>
            <CompoB/>
            </UserProvider>
        </div>
    )
}

export default CompoA
