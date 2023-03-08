export default function (context) {
    if (!context.store.getters.isAuthenticated) {
      console.log('[MiddleWare] auth')
      context.redirect('/admin/auth')
  }
}
