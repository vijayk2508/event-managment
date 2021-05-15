import { createBrowserHistory } from 'history'
import { Cookies } from 'react-cookie'

let history = createBrowserHistory()

const cookies = new Cookies()

export { history, cookies }
