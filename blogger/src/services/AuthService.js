import { AUTH_EVENTS, initialize } from '@bcwdev/auth0provider-client'
import { AppState } from '../AppState'
import { audience, clientId, domain } from '../env'
import { accountService } from './AccountService'
import { api } from './AxiosService'
import { socketService } from './SocketService'


export const AuthService = initialize({
  domain,
  clientId,
  authorizationParams: {
    audience,
    redirect_uri: window.location.origin,
  }
})

AuthService.on(AUTH_EVENTS.AUTHENTICATED, async function() {
  api.defaults.headers.authorization = AuthService.bearer
  api.interceptors.request.use(refreshAuthToken)
  AppState.identity = AuthService.identity
  await accountService.getAccount()
  socketService.authenticate(AuthService.bearer)
  // NOTE if there is something you want to do once the user is authenticated, place that here
})

async function refreshAuthToken(config) {
  if (AuthService.state == AUTH_EVENTS.AUTHENTICATED) { return config }
  const expires = AuthService.identity.exp * 1000
  const expired = expires < Date.now()
  const needsRefresh = expires < Date.now() + (1000 * 60 * 60 * 12)
  if (expired) {
    await AuthService.loginWithPopup()
  } else if (needsRefresh) {
    await AuthService.getTokenSilently()
    api.defaults.headers.authorization = AuthService.bearer
    socketService.authenticate(AuthService.bearer)
  }
  return config
}

