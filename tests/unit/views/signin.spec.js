import { shallowMount, mount } from '@vue/test-utils';
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
 

  

  const wrapper = mount( Signin, mountOptions )
  
  test('prueba #1 simple', () => { 
    console.log('hola')
    const uno = 1 
    expect( uno ).toBe(1)
  })
})