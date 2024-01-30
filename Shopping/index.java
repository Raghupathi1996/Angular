// Sample classes in java

public class Main {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem(new CartItem("123", "Product A", 19.99));
        cart.addItem(new CartItem("456", "Product B", 29.99));

        // Checkout using different payment and notification methods
        cart.checkout("CreditCard", "Email");
        cart.checkout("PayPal", "SMS");
    }
}


class CartItem {
    private String productId;
    private String name;
    private double price;

    public CartItem(String productId, String name, double price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    public double getPrice() {
        return price;
    }
}


class CreditCardPaymentProcessor {
    public void processPayment(double amount) {
        System.out.println("Processing credit card payment: $" + amount);
    }
}



class EmailNotificationService {
    public void sendEmail(String subject, String message) {
        System.out.println("Sending email: " + subject + " - " + message);
    }
}


class PayPalPaymentProcessor {
    public void processPayment(double amount) {
        System.out.println("Processing PayPal payment: $" + amount);
    }
}

import java.util.ArrayList;
import java.util.List;

class ShoppingCart {
    private List<CartItem> items;

    public ShoppingCart() {
        this.items = new ArrayList<>();
    }

    public void addItem(CartItem item) {
        items.add(item);
    }

    public void checkout(String paymentMethod, String notificationMethod) {
        double total = 0.0;
        for (CartItem item : items) {
            total += item.getPrice();
        }

        if (paymentMethod.equals("CreditCard")) {
            CreditCardPaymentProcessor paymentProcessor = new CreditCardPaymentProcessor();
            paymentProcessor.processPayment(total);
        } else if (paymentMethod.equals("PayPal")) {
            PayPalPaymentProcessor paymentProcessor = new PayPalPaymentProcessor();
            paymentProcessor.processPayment(total);
        }

        if (notificationMethod.equals("Email")) {
            EmailNotificationService notificationService = new EmailNotificationService();
            notificationService.sendEmail("Order Confirmation", "Thank you for your order! Total: $" + total);
        } else if (notificationMethod.equals("SMS")) {
            SMSNotificationService notificationService = new SMSNotificationService();
            notificationService.sendSMS("Order Confirmation", "Thank you for your order! Total: $" + total);
        }
    }
}


class SMSNotificationService {
    public void sendSMS(String subject, String message) {
        System.out.println("Sending SMS: " + subject + " - " + message);
    }
}
