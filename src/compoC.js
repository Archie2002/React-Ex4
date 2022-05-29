import React from 'react'
import CompoA from './compoA'
import CompoD from './compoD'
import { UserConsumer } from './userContext'

function CompoC() {
    return (
        <div>
            <CompoD/>
            <UserConsumer>
                {
                    (value) => {
                    return <h2>Sum is: {value} from CompoA</h2>
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default CompoC
