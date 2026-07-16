import paymentApi from '../../../services/api/payment.api';
import loadRazorpay from '../../../utils/loadRazorpay';

const paymentService = {
  createOrder: async (requestId) => {
    const response = await paymentApi.createOrder(requestId);
    return response.data;
  },

  verifyPayment: async (data) => {
    const response = await paymentApi.verifyPayment(data);
    return response.data;
  },
};

const openCheckout = async ({ request, onSuccess }) => {
  const loaded = await loadRazorpay();
  if (!loaded) {
    throw new Error('Unable to load Razorpay.');
  }

  const response = await paymentService.createOrder(request._id);
  const { order, key } = response.data;

  const options = {
    key,
    amount: order.amount,
    currency: order.currency,
    name: 'BloodLink',
    description: 'Blood Request Processing Fee',
    order_id: order.id,
    modal: {
      ondismiss: () => {
        throw new Error('Payment cancelled.');
      },
    },

    handler: async (paymentResponse) => {
      await paymentService.verifyPayment({
        ...paymentResponse,
        requestId: request._id,
      });
      onSuccess();
    },
    theme: {
      color: '#dc2626',
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};

paymentService.openCheckout = openCheckout;

export default paymentService;
