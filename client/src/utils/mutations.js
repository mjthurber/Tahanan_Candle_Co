import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const MUTATION_ADD_REVIEW = gql`
  mutation addReview($productId: ID!, $userId: ID!, $reviewText: String!) {
    addReview(productId: $productId, userId: $userId, reviewText: $reviewText) {
      _id
      productId
      userId
      reviewText
      createdAt
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        fragranceNotes
        signatureNotes
        inspiration
        intendedExperience
        pleaseNote
        price
        quantity
        size
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
