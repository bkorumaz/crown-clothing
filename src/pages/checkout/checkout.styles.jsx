import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`
export const CheckoutHeader = styled(span)`
width: 100%;
padding: 10px 0;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;
`
export const CheckoutHeaderBlock = styled.div`
text-transform: capitalize;
        width: 23%;
  
        &:last-child {
          width: 8%;
        }
`
  
    .checkout-header {
  
      .header-block {
        
      }
    }
  
    .total {
      margin-top: 30px;
      margin-left: auto;
      font-size: 36px;
    }

    .test-warning {
      text-align: center;
      margin-top: 40px;
      margin-bottom:20px;
      font-size: 24px;
      color: red;
    }
  }
  