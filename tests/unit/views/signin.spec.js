import { mount } from '@vue/test-utils';
import Signin from "@/views/Signin"
import router from "@/router";

describe('Signin Component', () => {

  const mocks = { 
    $store : {
      state : {
        hideConfigButton: '',
        showNavbar: '',
        showSidenav: '',
        showFooter: ''
      }
    } 
  }

  const mountOptions = {
    global: {
      mocks ,
      plugins : [router]
    }
  }

  let wrapper
  let loginSpy
 
  beforeEach(() => {
    wrapper = mount( Signin, mountOptions )
    loginSpy = jest.spyOn( console, 'log')  
  })
   
  test('Todo el componente debe hacer match con el snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('El método login debe de ser llamado al rellenar los datos y undir click en el botón', () => {  
    const email = wrapper.find('[id-test="email"]')
    const password = wrapper.find('[id-test="password"]') 
    const boton = wrapper.find('[id-test="login"]') 

    email.setValue("alberteinstein@correounivalle.edu.co")
    password.setValue('einstein')
    boton.trigger('click') 

    // console.log( wrapper.vm.password, wrapper.vm.email )
    
    expect( loginSpy ).toHaveBeenCalledTimes(1)

 
  })
})