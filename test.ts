// console.log("hello world");

interface EmailNotification {
  type: "email";
  to: string;
  subject: string;
}

interface SMSNotification {
  type: "sms";
  phoneNumber: string;
  message: string;
}

interface PushNotification {
  type: "push";
  deviceId: string;
  title: string;
  body: string;
}

// type EmailNotification = {
//   type: "email";
//   to: string;
//   subject: string;
// };

// type SMSNotification = {
//   type: "sms";
//   phoneNumber: string;
//   message: string;
// };

// type PushNotification = {
//   type: "push";
//   deviceId: string;
//   title: string;
//   body: string;
// };

type Notification = EmailNotification | SMSNotification | PushNotification;

function sendNotification(notification: Notification) {
  switch (notification.type) {
    case "email": {
      const { to, subject } = notification;
      console.log(`Sending email to ${to}: ${subject}`);
      break;
    }
    case "sms": {
      const { phoneNumber, message } = notification;
      console.log(`Sending sms to ${phoneNumber}: ${message}`);
      break;
    }
    case "push": {
      const { deviceId, title, body } = notification;
      console.log(`Sending push to ${deviceId}: ${title} - ${body}`);
      break;
    }
  }
}

// sendNotification({
//   type: "email",
//   to: "user@example.com",
//   subject: "Welcome!",
// });

// sendNotification({
//   type: "sms",
//   phoneNumber: "+1234567890",
//   message: "Your code is 1234",
// });

// sendNotification({
//   type: "push",
//   deviceId: "abc123",
//   title: "New Alert",
//   body: "You've got a new message",
// });

const notif: Notification[] = [
  {
    type: "email",
    to: "user@example.com",
    subject: "Welcome!",
  },
  {
    type: "sms",
    phoneNumber: "+1234567890",
    message: "Your code is 1234",
  },
  {
    type: "push",
    deviceId: "abc123",
    title: "New Alert",
    body: "You've got a new message",
  },
];

// function sendAll(notifications: Notification[]) {
//   notifications.forEach((notification) => {
//     sendNotification(notification);
//   });
// }

// function sendAll2(notifications: Notification[]) {
//   for (const notification of notifications) {
//     sendNotification(notification);
//   }
// }

// sendAll(notif);
// sendAll2(notif);

// // 1. Define type guard
// function isSMS(n: Notification): n is SMSNotification {
//   return n.type === "sms";
// }

// // 2. Filter for SMS only
// const smsNotifications = notif.filter(isSMS);

// // 3. Loop and log
// smsNotifications.forEach(({ phoneNumber, message }) => {
//   console.log(`SMS to ${phoneNumber}: ${message}`);
// });

// function getNotificationMessages(notifications: Notification[]): string[] {
//   return notifications.map((n) => {
//     switch (n.type) {
//       case "email":
//         return `Email to ${n.to}: ${n.subject}`;
//       case "sms":
//         return `SMS to ${n.phoneNumber}: ${n.message}`;
//       case "push":
//         return `Push to ${n.deviceId}: ${n.title} - ${n.body}`;
//       default:
//         return "Unknown notification type";
//     }
//   });
// }

// const messages = getNotificationMessages(notif);
// messages.forEach((msg) => console.log(msg));
type NotificationType = "email" | "sms" | "push" | "invalid";

type NotificationMessage = {
  type: NotificationType;
  message: string;
};

function getNotificationMessages(
  notifications: Notification[]
): NotificationMessage[] {
  return notifications.map((n) => {
    switch (n.type) {
      case "email":
        return {
          type: n.type,
          message: `Email to ${n.to}: ${n.subject}`,
        };
      case "sms":
        return {
          type: n.type,
          message: `SMS to ${n.phoneNumber}: ${n.message}`,
        };
      case "push":
        return {
          type: n.type,
          message: `Push to ${n.deviceId}: ${n.title} - ${n.body}`,
        };
      default:
        return {
          type: "invalid",
          message: "Unknown notification type",
        };
    }
  });
}

const messages = getNotificationMessages(notif);
messages.forEach((msg) => console.log(msg.message));


type IsNumber<T> = T extends number ? "number" : "not-number";