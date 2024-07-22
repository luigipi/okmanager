export const codeBasic = `
<template>
  <div>
    <!-- modal trigger button -->
    <div class="demo-inline-spacing">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-1
        variant="outline-primary"
      >
        Basic Modal
      </b-button>

      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-center
        variant="outline-primary"
      >
        Vertically Center
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-no-backdrop
        variant="outline-primary"
      >
        Disabled Backdrop
      </b-button>
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-no-animation
        variant="outline-primary"
      >
        Disabled Animation
      </b-button>
    </div>

    <!-- basic modal -->
    <b-modal
      id="modal-1"
      title="Basic Modal"
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        <h5>Check First Paragraph</h5>
        Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie.
        Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake liquorice.
      </b-card-text>
    </b-modal>

    <!-- disable animation-->
    <b-modal
      id="modal-no-animation"
      content-class="shadow"
      title="Disabled Animation"
      no-fade
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        Chocolate bar jelly dragée cupcake chocolate bar I love donut liquorice.
        Powder I love marzipan donut candy canes jelly-o.
        Dragée liquorice apple pie candy biscuit danish lemon drops sugar plum.
      </b-card-text>
      <b-alert
        show
        variant="success"
      >
        <div class="alert-body">
          Well done! You successfully read this important alert message.
        </div>
      </b-alert>
    </b-modal>

    <!-- modal vertical center -->
    <b-modal
      id="modal-center"
      centered
      title="Vertically Centered"
      ok-only
      ok-title="Accept"
    >
      <b-card-text>
        Croissant jelly-o halvah chocolate sesame snaps.
        Brownie caramels candy canes chocolate cake marshmallow icing lollipop I love.
        Gummies macaroon donut caramels biscuit topping danish.
      </b-card-text>
    </b-modal>

    <!-- modal backdrop -->
    <b-modal
      id="modal-no-backdrop"
      hide-backdrop
      ok-only
      no-close-on-backdrop
      content-class="shadow"
      title="Disabled Backdrop"
      ok-title="Accept"
    >
      <b-card-text>
        <span>We've added the utility class</span>
        <code>'shadow'</code>
        <span>to the modal content for added effect.</span>
      </b-card-text>
      <b-card-text>
        Candy oat cake topping topping chocolate cake. Icing pudding jelly beans I love chocolate carrot cake wafer
        candy canes. Biscuit croissant fruitcake bonbon soufflé.
      </b-card-text>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BButton, VBModal, BAlert} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCardCode,
    BButton,
    BModal,
    BAlert,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
}
</script>
`