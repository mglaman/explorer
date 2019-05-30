import {
  getAttributes,
  getRelationships,
  getRelationshipSchema
} from './normalize';


const schemaMenu = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://drupal.test/jsonapi/menu/menu/resource/schema.json",
  "allOf": [
    {
      "type": "object",
      "properties": {
        "attributes": {
          "$ref": "#/definitions/attributes"
        },
        "relationships": {
          "$ref": "#/definitions/relationships"
        }
      }
    },
    {
      "$ref": "https://jsonapi.org/schema#/definitions/resource"
    }
  ],
  "properties": {
    "attributes": {
      "$ref": "#/definitions/attributes"
    }
  },
  "definitions": {
    "attributes": {
      "type": "object",
      "properties": {
        "drupal_internal__id": {},
        "langcode": {},
        "status": {},
        "dependencies": {},
        "third_party_settings": {},
        "label": {},
        "description": {},
        "locked": {}
      },
      "additionalProperties": false
    }
  }
};

const schemaArticle = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://drupal.test/jsonapi/node/article/resource/schema.json",
  "allOf": [
    {
      "type": "object",
      "properties": {
        "attributes": {
          "$ref": "#/definitions/attributes"
        },
        "relationships": {
          "$ref": "#/definitions/relationships"
        }
      }
    },
    {
      "$ref": "https://jsonapi.org/schema#/definitions/resource"
    }
  ],
  "properties": {
    "attributes": {
      "$ref": "#/definitions/attributes"
    }
  },
  "definitions": {
    "attributes": {
      "type": "object",
      "properties": {
        "drupal_internal__nid": {},
        "drupal_internal__vid": {},
        "langcode": {},
        "revision_timestamp": {},
        "revision_log": {},
        "status": {},
        "title": {},
        "created": {},
        "changed": {},
        "promote": {},
        "sticky": {},
        "default_langcode": {},
        "revision_default": {},
        "revision_translation_affected": {},
        "path": {},
        "body": {}
      },
      "additionalProperties": false
    },
    "relationships": {
      "type": "object",
      "properties": {
        "node_type": {
          "type": "object",
          "properties": {
            "links": {
              "type": "object",
              "properties": {
                "related": {
                  "type": "object",
                  "properties": {
                    "meta": {
                      "type": "object",
                      "properties": {
                        "linkParams": {
                          "type": "object",
                          "properties": {
                            "describedBy": {
                              "const": "http://drupal.test/jsonapi/node/article/resource/relationships/node_type/related/schema.json"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "revision_uid": {
          "type": "object",
          "properties": {
            "links": {
              "type": "object",
              "properties": {
                "related": {
                  "type": "object",
                  "properties": {
                    "meta": {
                      "type": "object",
                      "properties": {
                        "linkParams": {
                          "type": "object",
                          "properties": {
                            "describedBy": {
                              "const": "http://drupal.test/jsonapi/node/article/resource/relationships/revision_uid/related/schema.json"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "uid": {
          "type": "object",
          "properties": {
            "links": {
              "type": "object",
              "properties": {
                "related": {
                  "type": "object",
                  "properties": {
                    "meta": {
                      "type": "object",
                      "properties": {
                        "linkParams": {
                          "type": "object",
                          "properties": {
                            "describedBy": {
                              "const": "http://drupal.test/jsonapi/node/article/resource/relationships/uid/related/schema.json"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "field_image": {
          "type": "object",
          "properties": {
            "links": {
              "type": "object",
              "properties": {
                "related": {
                  "type": "object",
                  "properties": {
                    "meta": {
                      "type": "object",
                      "properties": {
                        "linkParams": {
                          "type": "object",
                          "properties": {
                            "describedBy": {
                              "const": "http://drupal.test/jsonapi/node/article/resource/relationships/field_image/related/schema.json"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "field_tags": {
          "type": "object",
          "properties": {
            "links": {
              "type": "object",
              "properties": {
                "related": {
                  "type": "object",
                  "properties": {
                    "meta": {
                      "type": "object",
                      "properties": {
                        "linkParams": {
                          "type": "object",
                          "properties": {
                            "describedBy": {
                              "const": "http://drupal.test/jsonapi/node/article/resource/relationships/field_tags/related/schema.json"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "additionalProperties": false
    }
  }
};

const schemaNoDefinitions = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://drupal.test/jsonapi/menu/menu/resource/schema.json",
};

const schemaNoProperties = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "http://drupal.test/jsonapi/menu/menu/resource/schema.json",
  "definitions": {}
};

describe('Schema Attributes', () => {

  test('Extract attribute names from schema definitions', () => {
    expect(getAttributes(schemaMenu)).toEqual([
      'drupal_internal__id',
      'langcode',
      'status',
      'dependencies',
      'third_party_settings',
      'label',
      'description',
      'locked'
    ]);

    expect(getAttributes(schemaArticle)).toEqual([
      'drupal_internal__nid',
      'drupal_internal__vid',
      'langcode',
      'revision_timestamp',
      'revision_log',
      'status',
      'title',
      'created',
      'changed',
      'promote',
      'sticky',
      'default_langcode',
      'revision_default',
      'revision_translation_affected',
      'path',
      'body'
    ]);
  });

  test('Return empty array for incomplete or empty schema', () => {
    expect(getAttributes(schemaNoDefinitions)).toEqual([]);
    expect(getAttributes(schemaNoProperties)).toEqual([]);
    expect(getAttributes([])).toEqual([]);
    expect(getAttributes({})).toEqual([]);
    expect(getAttributes(null)).toEqual([]);
  });

});

describe('Schema Includes', () => {

  test('Get relationship list from schema', () => {
    expect(getRelationships(schemaArticle)).toEqual([
      'node_type',
      'revision_uid',
      'uid',
      'field_image',
      'field_tags'
    ]);
  });

  test('Return empty array for incomplete or empty schema', () => {
    expect(getRelationships(schemaNoDefinitions)).toEqual([]);
    expect(getRelationships(schemaNoProperties)).toEqual([]);
    expect(getRelationships([])).toEqual([]);
    expect(getRelationships({})).toEqual([]);
    expect(getRelationships(null)).toEqual([]);
  })

});

describe('Normalize Properties', () => {

  test('Get flattened object from nested properties', () => {
    expect(getRelationshipSchema(schemaArticle.definitions.relationships.properties.node_type)).toEqual({
      describedBy: {
        const: "http://drupal.test/jsonapi/node/article/resource/relationships/node_type/related/schema.json"
      }
    });
  });
});