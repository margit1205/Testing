describe('Login', () => {


  it('To verify Login', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('7061205179')
    cy.get('#continue').click()
    cy.get('#ap_password').type('KINGAftab@786@')
    cy.get('#signInSubmit').click()
    
    
  })
  it('To verify Login for wrong inpu', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('93982938')
    cy.get('#continue').click()
    
    
    
  })


  it('To verify create account ', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#createAccountSubmit').click()
    cy.get('#ap_customer_name').type('Saad')
    cy.get('#ap_email').type('aftab.raja@wavemaker.com')
    cy.get('#ap_password').type('pramati')
    cy.get('#ap_password_check').type('pramati')
    cy.get('#continue').click()

    
  })


  it('To verify forget password', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('.a-expander-prompt').click()
    cy.get('#auth-fpp-link-bottom').click()
    cy.get('#ap_email').type('7061205179')
     cy.get('#continue').click()
     cy.get('#cvf-input-code').type('12345')
     cy.get('.a-button-input').click()
     cy.get('#ap_fpp_password').type('xyyyxxx')
     cy.get('#ap_fpp_password_check').type('xyyyxxx')
     cy.get('#continue').click()

  })



})



describe('Homepage', () => {
  it('verify that user should be able to select product', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('7061205179')
    cy.get('#continue').click()
    cy.get('#ap_password').type('KINGAftab@786@')
    cy.get('#signInSubmit').click()
    cy.get('._quad-multi-asin-card-v2_style_topLeftQuadrant__yF7Ht > .a-image-container > img').click()
   
  })

  it('To verify serach button working ', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type('iphone')
    cy.get('#nav-search-submit-button').click()

    
  })

  it('verify add to cart or wishlist', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('7061205179')
    cy.get('#continue').click()
    cy.get('#ap_password').type('KINGAftab@786@')
    cy.get('#signInSubmit').click()
    cy.get('#twotabsearchtextbox').type('oneplus')
    cy.get('#nav-search-submit-button').click()
   // cy.get('.a-link-normal ').should('contain.text',"OnePlus 11 5G").click();
   cy.get('.a-size-medium').should('contains.text',"OnePlus 11 5G | 16GB RAM+256GB | Titan Black | US Factory Unlocked Android Smartphone | 5000 mAh battery | 80W Fast charging | Hasselblad Camera | 120Hz Fluid Display | 4nm Processor").first().click()
    cy.get('#add-to-cart-button').click()
    
  })


})






describe('CartPage', () => {
  
  it('verify add to cart or wishlist', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('7061205179')
    cy.get('#continue').click()
    cy.get('#ap_password').type('KINGAftab@786@')
    cy.get('#signInSubmit').click()
    cy.get('#twotabsearchtextbox').type('oneplus')
    cy.get('#nav-search-submit-button').click()
    cy.get('.a-size-medium').should('contains.text',"OnePlus 11 5G | 16GB RAM+256GB | Titan Black | US Factory Unlocked Android Smartphone | 5000 mAh battery | 80W Fast charging | Hasselblad Camera | 120Hz Fluid Display | 4nm Processor").first().click()
    cy.get('#add-to-cart-button').click()
    
  })


  it('verify adding more items to cart and displaying', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('7061205179')
    cy.get('#continue').click()
    cy.get('#ap_password').type('KINGAftab@786@')
    cy.get('#signInSubmit').click()
    cy.get('#twotabsearchtextbox').type('shirt')
    cy.get('#nav-search-submit-button').click()
   cy.get('.a-size-base-plus').should('contains.text',"Amazon Essentials Men's Slim-Fit Short-Sleeve Crewneck T-Shirt, Pack of 2").first().click()
    cy.get('#add-to-cart-button').click()
    cy.get('#nav-cart').click()
    
  })


  

 
  
})


describe('Checkout', () => {


  it('verify checkout', () => {


    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('7061205179')
    cy.get('#continue').click()
    cy.get('#ap_password').type('KINGAftab@786@')
    cy.get('#signInSubmit').click()
    cy.get('#nav-cart').click()
    cy.get('[data-feature-id="proceed-to-checkout-action"]').click()
    cy.get('[data-testid="Address_selectShipToThisAddress"]').click()
    
    
  })

})





describe('Logout', () => {


  it('verify logout', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('7061205179')
    cy.get('#continue').click()
    cy.get('#ap_password').type('KINGAftab@786@')
    cy.get('#signInSubmit').click()
    cy.get('#nav-link-accountList > .nav-line-2').trigger('mouseover')
    cy.get('#nav-item-signout').click()
    
    

   
    
  })


})