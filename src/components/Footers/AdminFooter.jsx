/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { isQueryReady } from '../../utils/queries';

const USER_INFO = gql`
  query {
    viewer {
      name
      updatedAt
      url
    }
  }
`;

const YearName = ({ data }) => (
  <div className="copyright text-center text-xl-left text-muted">
    © {new Date(data.viewer.updatedAt).getFullYear()}{' '}
    <a
      className="font-weight-bold ml-1"
      href={data.viewer.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {data.viewer.name}
    </a>
  </div>
);

const Footer = () => {
  const userInfoQuery = useQuery(USER_INFO);

  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        {isQueryReady(userInfoQuery) && (
          <Col xl="6">
            <YearName {...userInfoQuery} />
          </Col>
        )}

        <Col xl="6">
          <div className="copyright text-center text-xl-right text-muted">
            Built with ❤️ by
            <a
              className="font-weight-bold ml-1"
              href="https://github.com/EmaSuriano"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ema Suriano
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
