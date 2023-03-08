export default function (context){
  console.log('[MiddleWare] check-auth')

    context.store.dispatch('initAuth',context.req);

}
