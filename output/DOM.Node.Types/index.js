// Generated by purs version 0.11.7
"use strict";
var DOM_Event_Types = require("../DOM.Event.Types");
var DOM_Util_FFI = require("../DOM.Util.FFI");
var Data_Eq = require("../Data.Eq");
var Data_Foreign = require("../Data.Foreign");
var Data_Newtype = require("../Data.Newtype");
var Data_Ord = require("../Data.Ord");
var Prelude = require("../Prelude");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var ElementId = function (x) {
    return x;
};
var textToNode = Unsafe_Coerce.unsafeCoerce;
var readNode = DOM_Util_FFI.unsafeReadProtoTagged("Node");
var readElement = DOM_Util_FFI.unsafeReadProtoTagged("Element");
var readDocument = DOM_Util_FFI.unsafeReadProtoTagged("Document");
var processingInstructionToNode = Unsafe_Coerce.unsafeCoerce;
var oOrdElementId = Data_Ord.ordString;
var newtypeElementId = new Data_Newtype.Newtype(function (n) {
    return n;
}, ElementId);
var eqElementId = Data_Eq.eqString;
var elementToParentNode = Unsafe_Coerce.unsafeCoerce;
var elementToNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
var elementToNode = Unsafe_Coerce.unsafeCoerce;
var elementToEventTarget = Unsafe_Coerce.unsafeCoerce;
var documentTypeToNode = Unsafe_Coerce.unsafeCoerce;
var documentToParentNode = Unsafe_Coerce.unsafeCoerce;
var documentToNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
var documentToNode = Unsafe_Coerce.unsafeCoerce;
var documentToEventTarget = Unsafe_Coerce.unsafeCoerce;
var documentFragmentToParentNode = Unsafe_Coerce.unsafeCoerce;
var documentFragmentToNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
var documentFragmentToNode = Unsafe_Coerce.unsafeCoerce;
var commentToNode = Unsafe_Coerce.unsafeCoerce;
var characterDataToNonDocumentTypeChildNode = Unsafe_Coerce.unsafeCoerce;
module.exports = {
    readNode: readNode,
    readDocument: readDocument,
    documentToNonElementParentNode: documentToNonElementParentNode,
    documentToParentNode: documentToParentNode,
    documentToNode: documentToNode,
    documentToEventTarget: documentToEventTarget,
    ElementId: ElementId,
    readElement: readElement,
    elementToParentNode: elementToParentNode,
    elementToNonDocumentTypeChildNode: elementToNonDocumentTypeChildNode,
    elementToNode: elementToNode,
    elementToEventTarget: elementToEventTarget,
    characterDataToNonDocumentTypeChildNode: characterDataToNonDocumentTypeChildNode,
    textToNode: textToNode,
    commentToNode: commentToNode,
    processingInstructionToNode: processingInstructionToNode,
    documentFragmentToNonElementParentNode: documentFragmentToNonElementParentNode,
    documentFragmentToParentNode: documentFragmentToParentNode,
    documentFragmentToNode: documentFragmentToNode,
    documentTypeToNode: documentTypeToNode,
    newtypeElementId: newtypeElementId,
    eqElementId: eqElementId,
    oOrdElementId: oOrdElementId
};
