import React from 'react';
//Using the reactBootStrap 
import { Container } from "reactstrap";
import PropTypes from "prop-types";

class Footer extends React.Component {

    render() {
        return (
            <footer className={"footer" + (this.props.default ? " footer-default" : "")}>
                <Container fluid={this.props.fluid ? true : false}>
                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.creative-tim.com">LinkdId</a>
                            </li>
                            <li>
                                <a href="https://presentation.creative-tim.com">About Us</a>
                            </li>
                            <li>
                                <a href="https://blog.creative-tim.com">Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright">
                        &copy; {1900 + new Date().getYear()}, Inspired by{" "}
                        <a
                            href="https://www.invisionapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Invision  </a>. Coded by: {" Eduardo Alcantara de Oliveira "}
                        <a
                            href="https://www.creative-tim.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Creative EAO
            </a>.
          </div>

                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
};

export default Footer;
