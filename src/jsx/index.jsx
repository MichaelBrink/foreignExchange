import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/index';
import Homepage2 from './pages/index2';
import Price from './pages/price';
import Wallet from './pages/wallet';
import About from './pages/about';
import Team from './pages/team';
import Blog from './pages/blog';
import BlogSingle from './pages/blog-single';
import Career from './pages/career';
import Contact from './pages/contact';
import HelpDesk from './pages/helpdesk';
import Faq from './pages/faq';
import Dashboard from './pages/dashboard';
import BuySell from './pages/buy-sell';
import Accounts from './pages/accounts';
import Settings from './pages/settings';
import Preferences from './pages/settings-preferences';
import SettingsSecurity from './pages/settings-security';
import SettingsAccount from './pages/settings-account';
import AddBankAccount from './pages/add-bank-acc';
import AddDebitCard from './pages/add-debit-card';
import Locked from './pages/lock';
import Otp1 from './pages/otp-1';
import Otp2 from './pages/otp-2';
import PrivacyPolicy from './pages/privacy-policy';
import Reset from './pages/reset';
import Signin from './pages/signin';
import Signup from './pages/signup';
import TermsCondition from './pages/terms-condition';
import VerifyStep1 from './pages/verify-step-1';
import VerifyStep2 from './pages/verify-step-2';
import VerifyStep3 from './pages/verify-step-3';
import VerifyStep4 from './pages/verify-step-4';
import VerifyStep5 from './pages/verify-step-5';
import VerifyStep6 from './pages/verify-step-6';
import History from './pages/history';
import Demo from './pages/demo';
class Index extends Component {
    render() {
        return (
            <>
                <BrowserRouter basename={'/demo/tradix_react'}>
                    <div id="main-wrapper">
                        <Switch>
                            <Route path='/' exact component={Homepage} />
                            <Route path='/index2' component={Homepage2} />
                            <Route path='/price' component={Price} />
                            <Route path='/wallet' component={Wallet} />
                            <Route path='/about' component={About} />
                            <Route path='/team' component={Team} />
                            <Route path='/blog' component={Blog} />
                            <Route path='/blog-single' component={BlogSingle} />
                            <Route path='/career' component={Career} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/helpdesk' component={HelpDesk} />
                            <Route path='/faq' component={Faq} />
                            <Route path='/dashboard' component={Dashboard} />
                            <Route path='/buy-sell' component={BuySell} />
                            <Route path='/accounts' component={Accounts} />
                            <Route path='/settings' component={Settings} />
                            <Route path='/settings-preferences' component={Preferences} />
                            <Route path='/settings-security' component={SettingsSecurity} />
                            <Route path='/settings-account' component={SettingsAccount} />
                            <Route path='/add-bank-acc' component={AddBankAccount} />
                            <Route path='/add-debit-card' component={AddDebitCard} />
                            <Route path='/lock' component={Locked} />
                            <Route path='/otp-1' component={Otp1} />
                            <Route path='/otp-2' component={Otp2} />
                            <Route path='/privacy-policy' component={PrivacyPolicy} />
                            <Route path='/reset' component={Reset} />
                            <Route path='/signin' component={Signin} />
                            <Route path='/signup' component={Signup} />
                            <Route path='/terms-condition' component={TermsCondition} />
                            <Route path='/verify-step-1' component={VerifyStep1} />
                            <Route path='/verify-step-2' component={VerifyStep2} />
                            <Route path='/verify-step-3' component={VerifyStep3} />
                            <Route path='/verify-step-4' component={VerifyStep4} />
                            <Route path='/verify-step-5' component={VerifyStep5} />
                            <Route path='/verify-step-6' component={VerifyStep6} />
                            <Route path='/history' component={History} />
                            <Route path='/demo' component={Demo} />
                        </Switch>
                    </div>
                </BrowserRouter>

            </>
        );
    }
}

export default Index;