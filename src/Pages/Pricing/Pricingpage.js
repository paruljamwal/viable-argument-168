import React, { useState } from "react";
import "./Pricing.css";
import { FaFlagUsa } from "react-icons/fa";
import { Switch } from "@chakra-ui/react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Text,
} from "@chakra-ui/react";
const Pricingpage = () => {
  const [toggle, settoggle] = useState(false);
  console.log(toggle);
  const handletoggle = () => {
    settoggle(!toggle);
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <main className="forfamily">
        <section className="topsection">
          <div className="containerarticle">
            <div className="articlecenter">
              <h1 className="pagetitleheader">
                Simple pricing with no extra fees
              </h1>
              <div className="pagesubtitleheader">
                <h3>
                  Start with no commitment. Try everything. Subscribe if you
                  love it.
                </h3>
              </div>
            </div>
            <div className="topswitch">
              <div className="switchplan">
                <input placeholder="" />
              </div>
            </div>
          </div>
          <Stack
            align="center"
            direction="row"
            className="togglebtn"
            onChange={handletoggle}
          >
            {!toggle ? (
              <Text
                className="togglebtn1"
                color="green"
                bgColor={"rgb(242,251,249)"}
              >
                Monthly
              </Text>
            ) : (
              <Text className="togglebtn1">Monthly</Text>
            )}

            <Switch size="md" colorScheme="green" />
            {toggle ? (
              <Text
                className="togglebtn1"
                color="green"
                bgColor={"rgb(242,251,249)"}
              >
                Yearly
              </Text>
            ) : (
              <Text className="togglebtn1">Yearly</Text>
            )}
          </Stack>

          <div className="pricingcards">
            {toggle ? (
              <div className="carditems">
                <h3 className="pricingtitle">All-in-one</h3>

                <div className="pricingsubtitles">
                  <p>All features, plus best-in-class integrations</p>
                </div>

                <p className="costvalue">
                  <span className="costvaluedolor">$</span>
                  <span className="costvaluers">8</span>
                  <span className="costvaluechapni">.50</span>
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="subtitle">
                  <p>
                    <b style={{ opacity: 0.8 }}>
                      / user / month, starting at 5 users{" "}
                    </b>
                  </p>
                </div>

                <ul>
                  <li>Unlimited users</li>
                  <li>Unlimited projects</li>
                  <li>Unlimited integrations</li>
                  <li>All features</li>
                  <li>Fast and responsive support</li>
                </ul>
                <div className="actionbtns">
                  {" "}
                  <button>Try free</button>
                </div>
              </div>
            ) : (
              <div className="carditems">
                <h3 className="pricingtitle">All-in-one</h3>

                <div className="pricingsubtitles">
                  <p>All features, plus best-in-class integrations</p>
                </div>

                <p className="costvalue">
                  <span className="costvaluedolor">$</span>
                  <span className="costvaluers">10</span>
                  <span className="costvaluechapni"></span>
                </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="subtitle">
                  <p>
                    <b style={{ opacity: 0.8 }}>
                      / user / month, starting at 5 users{" "}
                    </b>
                    <span className="tooltip-hover"></span>
                  </p>
                </div>

                <ul>
                  <li>Unlimited users</li>
                  <li>Unlimited projects</li>
                  <li>Unlimited integrations</li>
                  <li>All features</li>
                  <li>Fast and responsive support</li>
                </ul>
                <div className="actionbtns">
                  {" "}
                  <button>Try free</button>
                </div>
              </div>
            )}
          </div>

          <div className="currencycontainer">
            <div className="currency-section">
              <span>
                Currency
                <select>
                  <option>
                    <FaFlagUsa />
                    USD
                  </option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>AUD</option>
                  <option>CAD</option>
                  <option>
                    {" "}
                    <img
                      src="https://img.freepik.com/premium-vector/official-national-flag-united-states-america_147754-319.jpg?w=20"
                      alt="df"
                    />
                    INR
                  </option>
                </select>
              </span>
            </div>
          </div>
        </section>
        <section className="Ugrid">
          <div className="anserDiv">
            <div className="rowanswer">
              <h2 className="pagetitle">Your questions. Answered!</h2>
              <div className="pagesubtitle">
                <h3>
                  Here is a list of the most frequently asked questions. Got
                  others or some ideas? — <a href="/#">Contact us!</a>
                </h3>
                <div className="imgepic">
                  <img
                    src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq@2x.webp"
                    alt="faq illustration"
                  ></img>
                </div>
              </div>
            </div>
            <div className="accordian">
              <Accordion allowToggle>
                <AccordionItem borderTop={"none"}>
                  <h2>
                    <AccordionButton
                      padding="20px 32px 20px 10px"
                      fontWeight={"500"}
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        display="flex"
                        fontSize={"18px"}
                      >
                        What's the trial period purpose?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={5}
                    left={"0%"}
                    textAlign="left"
                    opacity={0.8}
                  >
                    When you sign up, you get a fully-functional account for 2
                    weeks, which gives you access to everything Everhour has to
                    offer. After 14 days, you will need to pick a plan and enter
                    your credit card details. We’ll email you a couple of days
                    before your trial expires to remind you.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton padding="20px 32px 20px 10px">
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight={"500"}
                        display="flex"
                        fontSize={"18px"}
                      >
                        Can I change my plan later?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={5}
                    left={"0%"}
                    textAlign="left"
                    opacity={0.8}
                  >
                    Yes, you can upgrade/downgrade your plan at any time. You
                    will be credited for the remainder of your current plan and
                    charged for your new plan when you upgrade.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton padding="20px 32px 20px 10px">
                      <Box
                        flex="1"
                        textAlign="left"
                        display="flex"
                        fontWeight={"500"}
                        fontSize={"18px"}
                      >
                        Can I add or remove members at any time?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={5}
                    left={"0%"}
                    textAlign="left"
                    opacity={0.8}
                  >
                    Absolutely! Everhour is pay-as-you-go, and you can easily
                    add or remove members from your account with a couple of
                    clicks.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton padding="20px 32px 20px 10px">
                      <Box
                        flex="1"
                        textAlign="left"
                        display="flex"
                        fontWeight={"500"}
                        fontSize={"18px"}
                      >
                        What if I want to cancel my service?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={5}
                    left={"0%"}
                    textAlign="left"
                    opacity={0.8}
                  >
                    No problem. If you decide Everhour isn’t for you (or you
                    just need to pause), simply cancel before your next billing
                    period. This date is listed on your billing page.
                    Unfortunately, we can’t refund you for partial use or the
                    amount of time left in your subscription.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton padding="20px 32px 20px 10px">
                      <Box
                        flex="1"
                        textAlign="left"
                        display="flex"
                        fontWeight={"500"}
                        fontSize={"18px"}
                      >
                        What kind of payment methods do you accept?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={5}
                    left={"0%"}
                    textAlign="left"
                    opacity={0.8}
                  >
                    We currently accept any credit or debit card with a
                    MasterCard, Visa, Discover Network, American Express, Diners
                    Club International or JCB logo.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton padding="20px 32px 20px 10px">
                      <Box
                        flex="1"
                        textAlign="left"
                        display="flex"
                        fontWeight={"500"}
                        fontSize={"18px"}
                      >
                        Which currency will I be charged in?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={5}
                    left={"0%"}
                    textAlign="left"
                    opacity={0.8}
                  >
                    You will be charged in USD. However, our pricing page
                    displays the indicative price in other currencies based on
                    your location for your convenience.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton padding="20px 32px 20px 10px">
                      <Box
                        flex="1"
                        textAlign="left"
                        fontWeight={"545"}
                        display="flex"
                        fontSize={"18px"}
                      >
                        Can I change my plan later?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={5}
                    left={"0%"}
                    textAlign="left"
                    opacity={0.8}
                  >
                    Yes, you can upgrade/downgrade your plan at any time. You
                    will be credited for the remainder of your current plan and
                    charged for your new plan when you upgrade.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricingpage;
