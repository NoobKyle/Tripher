import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCardHeader>
          <IonCardTitle>John Doe</IonCardTitle>
          <IonCardSubtitle>Account Number : A123456789</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
        <ul>
          <li>Personal Information
            <ul>
              <li>Name: John Doe</li>
              <li>Date of Birth: 1990-01-01</li>
              <li>Gender: Male</li>
              <li>Current Address: 123 Main St</li>
              <li>Previous Address: 456 Elm St</li>
              <li>Phone Number: (123) 456-7890</li>
              <li>Email: john.doe@example.com</li>
              <li>SSN: 123-45-6789</li>
              <li>TIN: 987-65-4321</li>
              <li>Passport Number: A12345678</li>
              <li>Driver's License: D1234567</li>
            </ul>
          </li>
          <li>Bank Account Details
            <ul>
              <li>Account Number: 123456789</li>
              <li>Account Type: Savings</li>
              <li>Balance: $10,000</li>
            </ul>
          </li>
          <li>Transaction History
            <ul>
              <li>Transaction ID: 101
                <ul>
                  <li>Date: 2025-01-01</li>
                  <li>Amount: $200</li>
                  <li>Type: Debit</li>
                  <li>Merchant: ABC Store</li>
                  <li>Category: Shopping</li>
                </ul>
              </li>
              <li>Transaction ID: 102
                <ul>
                  <li>Date: 2025-01-02</li>
                  <li>Amount: $500</li>
                  <li>Type: Credit</li>
                  <li>Merchant: XYZ Inc.</li>
                  <li>Category: Salary</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Credit Information
            <ul>
              <li>Credit Score: 750</li>
              <li>Loan Amount: $50,000</li>
              <li>Interest Rate: 5%</li>
              <li>Repayment Schedule: Monthly</li>
              <li>Credit Card Limit: $10,000</li>
              <li>Credit Card Balance: $1,000</li>
            </ul>
          </li>
          <li>Investments
            <ul>
              <li>Investment Type: Stocks</li>
              <li>Investment Amount: $5,000</li>
            </ul>
          </li>
          <li>Online Banking Activity
            <ul>
              <li>Last Login: 2025-01-05</li>
              <li>IP Address: 192.168.1.1</li>
              <li>Device: iPhone</li>
              <li>Session Duration: 30 minutes</li>
            </ul>
          </li>
          <li>Customer Preferences
            <ul>
              <li>Communication Mode: Email</li>
              <li>Preferred Products: Credit Cards, Loans</li>
            </ul>
          </li>
          <li>Compliance Data
            <ul>
              <li>KYC Status: Verified</li>
              <li>Risk Profile: Moderate</li>
              <li>AML Status: Cleared</li>
              <li>PEP Status: No</li>
            </ul>
          </li>
          <li>Security Data
            <ul>
              <li>Biometric Data: Enabled</li>
              <li>Password Hash: [Hashed Value]</li>
              <li>Security Questions: Set</li>
              <li>Two-Factor Tokens: Active</li>
            </ul>
          </li>
          <li>Communication Records
            <ul>
              <li>Last Interaction: 2025-01-03</li>
              <li>Interaction Type: Support Call</li>
              <li>Details: Inquired about account balance</li>
            </ul>
          </li>
          <li>Marketing Data
            <ul>
              <li>Campaign Response: Positive</li>
              <li>Demographics: Age 30-40</li>
              <li>Psychographics: Tech-savvy, Value-conscious</li>
            </ul>
          </li>
          <li>Regulatory Data
            <ul>
              <li>Tax Residency Status: US Resident</li>
              <li>Tax Forms: W-2</li>
              <li>Legal Disputes: None</li>
            </ul>
          </li>
        </ul>

        </IonCardContent>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
