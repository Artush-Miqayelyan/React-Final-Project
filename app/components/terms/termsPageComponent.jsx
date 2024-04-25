import React from 'react';
import styles from './termsPageComponent.module.css'

function TermsComponent() {
    return <div className={styles.Info}>
        <h1>Terms of use</h1>

        <p>Dear user</p><br />

        <p>By registering on the AutoShop.am website or application, you accept these <b>Terms of Use</b>.</p><br />

        <p>- The AutoShop.am website is not responsible for the content of the announcements <br />
            on the sale of cars on the website (price, accuracy of information about the car / vehicle, etc.).</p><br />

        <p>- It is allowed to post up to 10 ads on the AutoShop.am website, including:</p><br />

        <p>- In order to place more than 10 cars on one account, it is necessary to sign an annual <br />
            contract, which will enable you to get <a className={styles.a} href="http://localhost:3000/contact">dealer status</a>. You can <a className={styles.a} href="http://localhost:3000/contact">contact us</a> to learn more about <br />
            the terms of the contract and the opportunities provided to dealers.</p><br />

        <p>- The same person is <b>not allowed</b> to install several cars with different accounts. Sign up once and use the same account to post your other ads.</p><br />

        <p>- It is <b>not allowed to repeat the same statement</b> by placing it in different makes and models. Place the ad for one vehicle once, exactly in its make and model.</p><br />

        <p>- It is <b>not allowed</b> to post announcements and information not related to the car (spare parts, real estate, etc.) in the announcement.</p><br />

        <p>- Advertisements for the purchase of cars and other vehicles are <b>not allowed</b></p><br />

        <p>- It is <b>not allowed</b> to place additional text information, signs or labels related to the announcement in the pictures of the announcement.</p><br />

        <p>- It is <b>not allowed</b> to indicate that the location of the vehicle is in Armenia, if it is located abroad or on the road.</p><br />

        <p>- It is <b>not allowed</b> to indicate that the means of transport is customs cleared, if it is located abroad and has not yet been cleared in Armenia.</p><br />

        <p>- It is <b>not allowed</b> to mention the names of companies or organizations in the Personal Data section, in the first and last name fields. <br />
            Only the Dealer account provides such an opportunity.</p><br />

        <p>- It is <b>not allowed</b> to indicate the value of the means of transport at illogically lower than market prices. <br />
            We consider such price manipulations an unscrupulous tool to gain attention in search results.</p><br />

        <p>- We advise you to specify the price of the car in AMD in accordance with the Law "On Currency Regulation and Currency Control". <br />
            Website visitors can simultaneously see the price in US dollars and Euros with the help of an automatic conversion system.</p><br />

        <p>Violation of these terms will result in account suspension <b>WITHOUT NOTICE.</b></p><br />

        <p>* blocking is a technical tool that does not allow the user who has committed a violation and is blocked to use the website's <br />
            services with the phone number and e-mail address specified during registration. at the address. The posted announcement is saved in <br />
            the database, but not published, until the end of the posting period. Account blocking can be removed if the user removes the violation <br />
            and confirms by letter that he will not violate the rules in the future. In case of repeated violations, we reserve the right to block the email. <br />
            address and phone number without the possibility of recovery.</p><br />

        <p><b>1. AutoShop.am is a database of motor vehicles for sale.</b> It helps its users to buy and sell cars and other vehicles. <br />
            Through the site, visitors submit their offers for cars for sale. Auto.am does not sell cars directly and is never a party to <br />
            transactions between sellers or buyers. Therefore, Auto.am: <br /><br />
            a. does not guarantee any transaction between a buyer and seller, <br />
            b. does not execute or transfer payments on behalf of buyers or sellers, <br />
            c. does not park, store or transport any vehicles and <br />
            d. is not responsible for buyers and sellers for possible disagreements or disputes between.</p><br />

        <p><b>2. Site Content.</b> The information posted on the AutoShop.am website is the property of the website administration, <br />
            dealers and other organizations registered on the website, as well as individuals registered on the website. <br />
            You may copy some of the information on the site for your own personal, non-commercial use, but no part of the site's <br />
            content may be reproduced, modified, transmitted, distributed, displayed or transmitted for commercial or other purposes <br />
            without AutoShop.am's written consent permission.Requests for commercial or other use of the site's content can be made through <br />
            the Contact page. AutoShop.am is not responsible for the consequences of possible defects on the website. You should not assume that the <br />
            website or its content is free of any errors. AutoShop.am reserves the right to make further changes to the website; services may be changed, <br />
            supplemented or discontinued.</p><br />

        <p><b>3. Payments.</b> Posting ads on AutoShop.am is free. Payments are intended only for additional services offered in the sales department. <br />
            We may at any time, at our sole discretion, completely or partially terminate or change the type and quantity of paid services offered on <br />
            the AutoShop.am website by notifying visitors in advance of the nature of the changes.</p><br />

        <p>Payment for services does not imply special treatment of the statement. If the announcement violates the Terms <br />
            of Use of the site, is placed in an inappropriate section or contains inappropriate information, it will be removed <br />
            from the site. In this case, it will not be reinstated, the service will not be extended to another statement, and no refund will be issued.</p><br />

        <p>In case of possible technical problems related to the operation of the website, due to which the activation of one of the <br />
            paid services failed, the AutoShop.am website guarantees the full provision of the service to the customer in the presence of proof <br />
            of payment (payment receipts, electronic yard statement / receipts). The amount paid for the services is non-refundable.</p><br />

        <p>Activation of paid services may fail due to problems arising both on the website and in the payment systems presented on AutoShop.am. <br />
            In these cases, customers should contact the service services of the mentioned payment systems or the Bank serving their card.</p><br />

        <p><b>4. Messages.</b></p><br />

        <p>Now you can send and receive messages from users registered on AutoShop.am.</p><br />

        <p>To use the messaging feature, you need to register and log in to the site.</p><br />

        <p><b>How to send and read messages?</b></p><br />

        <p>At the bottom of the ad page, click the <b>Write to Seller</b> button and write a message in the field that opens.</p><br />

        <p>A message will be sent to the user selling the vehicle, which he can read on his page in the <b>Messages section.</b> <br />
            In addition, an email will be sent to the user's email address specified during registration.If you reply, you will also <br />
            receive your e-mail address. you will receive an email that you have a new message. To read or reply to the email, click the <b>Read Message</b> button. <br />
            By clicking on it, you can read the reply in the messages section, as well as see new emails from other buyers.</p><br />

        <p>In addition to the letter, you can find out about the availability of new messages from the red numbers in the upper right corner of the site.</p><br />

        <p><b>How do I remove a message?</b></p><br />

        <p>If you want to remove messages from your page, you need to enter the <b>Messages</b> section, select the user, click the menu button in the upper <br />
            right corner, on the page that opens, under the user's name, click <b>Remove</b> messages and confirm. After confirmation of this action, the messages will <br />
            be removed from your page, but will be saved for the other user.</p><br />

        <p>If that user contacts you later, you will see their messages again.</p><br />

        <p><b>How to block unwanted users?</b></p><br />

        <p>If you don't want to receive messages from a user, you can block them.</p><br />

        <p>For this, you need to enter the <b>Messages</b> section, select the user, click the menu button in the upper <br />
        right corner, click <b>Block</b> and confirm under the user's name on the opening page.</p><br />

        <p>Blocked users will appear in the messages section in slightly faded colors and marked with the word <b>Blocked</b> in red.</p><br />

        <p>To unblock blocked users, you need to enter the <b>Messages</b> section, select the user, click the menu button in the upper right <br />
        corner, click the <b>Blocked</b> button under the user's name on the page that opens and remove the block.</p><br />

        <p><b>5. AutoShop.am on social networks.</b></p><br />

        <p>The AutoShop.am website has the following official pages on social media:</p><br />

        <p>Facebook : <a className={styles.a} href="https://www.facebook.com">https://www.facebook.com</a></p><br />

        <p>Instagram : <a className={styles.a} href="https://www.instagram.com">https://www.instagram.com</a></p><br />

        <p>Youtube : <a className={styles.a} href="https://www.youtube.com">https://www.youtube.com</a></p><br />

        <p>X : <a className={styles.a} href="https://twitter.com/?lang=ru">https://twitter.com/?lang=ru</a></p><br />

        <p>On social pages, we share news related to our site, global auto news, and also keep in touch with our users.</p><br />

        <p>Only the mentioned pages are our official pages. Any other pages that use our Auto.am domain name or logo <br />
        have no legal or content relationship with our website.</p><br />

    </div>

}

export default TermsComponent;