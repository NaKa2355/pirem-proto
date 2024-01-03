// source: api/v1/device.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.pirem.Device', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pirem.Device = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pirem.Device, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pirem.Device.displayName = 'proto.pirem.Device';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pirem.Device.prototype.toObject = function(opt_includeInstance) {
  return proto.pirem.Device.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pirem.Device} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pirem.Device.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bufferSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    canSend: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    canReceive: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    driverVersion: jspb.Message.getFieldWithDefault(msg, 7, ""),
    firmwareVersion: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pirem.Device}
 */
proto.pirem.Device.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pirem.Device;
  return proto.pirem.Device.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pirem.Device} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pirem.Device}
 */
proto.pirem.Device.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBufferSize(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanSend(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanReceive(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDriverVersion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirmwareVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pirem.Device.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pirem.Device.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pirem.Device} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pirem.Device.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBufferSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCanSend();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCanReceive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getDriverVersion();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFirmwareVersion();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pirem.Device.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pirem.Device} returns this
 */
proto.pirem.Device.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pirem.Device.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pirem.Device} returns this
 */
proto.pirem.Device.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 buffer_size = 3;
 * @return {number}
 */
proto.pirem.Device.prototype.getBufferSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pirem.Device} returns this
 */
proto.pirem.Device.prototype.setBufferSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool can_send = 4;
 * @return {boolean}
 */
proto.pirem.Device.prototype.getCanSend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pirem.Device} returns this
 */
proto.pirem.Device.prototype.setCanSend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool can_receive = 5;
 * @return {boolean}
 */
proto.pirem.Device.prototype.getCanReceive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pirem.Device} returns this
 */
proto.pirem.Device.prototype.setCanReceive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string driver_version = 7;
 * @return {string}
 */
proto.pirem.Device.prototype.getDriverVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pirem.Device} returns this
 */
proto.pirem.Device.prototype.setDriverVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string firmware_version = 8;
 * @return {string}
 */
proto.pirem.Device.prototype.getFirmwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pirem.Device} returns this
 */
proto.pirem.Device.prototype.setFirmwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


goog.object.extend(exports, proto.pirem);
