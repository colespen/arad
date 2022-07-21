/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/users": {
    post: operations["users_users_post"];
  };
}

export interface components {
  schemas: {
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /**
     * Role
     * @description An enumeration.
     * @enum {undefined}
     */
    Role: "READER" | "REVIEWER" | "ADMINISTRATOR";
    /** User */
    User: {
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /** Email */
      email: string;
      roles?: components["schemas"]["Role"][];
    };
    /** UsersRequest */
    UsersRequest: {
      /** Page */
      page?: number;
      /** Email Filter */
      email_filter: string;
    };
    /** UsersResponse */
    UsersResponse: {
      /** Users */
      users: components["schemas"]["User"][];
      /** Count */
      count: number;
      /** Page */
      page: number;
      /** Pages */
      pages: number;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (Partial<string> & Partial<number>)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
}

export interface operations {
  users_users_post: {
    responses: {
      /** Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["UsersResponse"];
        };
      };
      /** Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UsersRequest"];
      };
    };
  };
}

export interface external {}
