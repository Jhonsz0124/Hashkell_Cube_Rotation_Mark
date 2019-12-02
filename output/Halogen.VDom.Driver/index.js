// Generated by purs version 0.11.7
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Ref = require("../Control.Monad.Eff.Ref");
var DOM = require("../DOM");
var DOM_HTML = require("../DOM.HTML");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var DOM_HTML_Window = require("../DOM.HTML.Window");
var DOM_Node_Node = require("../DOM.Node.Node");
var DOM_Node_Types = require("../DOM.Node.Types");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Maybe = require("../Data.Maybe");
var Data_Unit = require("../Data.Unit");
var Halogen_Aff_Driver = require("../Halogen.Aff.Driver");
var Halogen_Aff_Driver_State = require("../Halogen.Aff.Driver.State");
var Halogen_Aff_Effects = require("../Halogen.Aff.Effects");
var Halogen_Component = require("../Halogen.Component");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_Query_InputF = require("../Halogen.Query.InputF");
var Halogen_VDom = require("../Halogen.VDom");
var Halogen_VDom_DOM = require("../Halogen.VDom.DOM");
var Halogen_VDom_DOM_Prop = require("../Halogen.VDom.DOM.Prop");
var Halogen_VDom_Machine = require("../Halogen.VDom.Machine");
var Prelude = require("../Prelude");
var Unsafe_Reference = require("../Unsafe.Reference");
var RenderState = function (x) {
    return x;
};
var substInParent = function (v) {
    return function (v1) {
        return function (v2) {
            if (v1 instanceof Data_Maybe.Just && v2 instanceof Data_Maybe.Just) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(DOM_Node_Node.insertBefore(v)(v1.value0)(v2.value0));
            };
            if (v1 instanceof Data_Maybe.Nothing && v2 instanceof Data_Maybe.Just) {
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(DOM_Node_Node.appendChild(v)(v2.value0));
            };
            return Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
        };
    };
};
var removeChild = function (v) {
    return function __do() {
        var v1 = DOM_Node_Node.parentNode(v.node)();
        return Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableMaybe)(function (pn) {
            return DOM_Node_Node.removeChild(v.node)(pn);
        })(v1)();
    };
};
var mkSpec = function (handler) {
    return function (renderChildRef) {
        return function (document) {
            var getNode = Halogen_Aff_Driver_State.unRenderStateX(function (v) {
                return v.node;
            });
            var done = Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit);
            var patch = function (slot) {
                return function __do() {
                    var v = Control_Monad_Eff_Ref.readRef(renderChildRef)();
                    var v1 = v(slot)();
                    var node = getNode(v1);
                    return new Halogen_VDom_Machine.Step(node, patch, done);
                };
            };
            var buildWidget = function (spec) {
                return function (slot) {
                    return function __do() {
                        var v = Control_Monad_Eff_Ref.readRef(renderChildRef)();
                        var v1 = v(slot)();
                        var node = getNode(v1);
                        return new Halogen_VDom_Machine.Step(node, patch, done);
                    };
                };
            };
            var buildAttributes = Halogen_VDom_DOM_Prop.buildProp(handler);
            return {
                buildWidget: buildWidget,
                buildAttributes: buildAttributes,
                document: document
            };
        };
    };
};
var renderSpec = function (document) {
    return function (container) {
        var render = function (handler) {
            return function (child) {
                return function (v) {
                    return function (v1) {
                        if (v1 instanceof Data_Maybe.Nothing) {
                            return function __do() {
                                var v2 = Control_Monad_Eff_Ref.newRef(child)();
                                var spec = mkSpec(handler)(v2)(document);
                                var v3 = Halogen_VDom_DOM.buildVDom(spec)(v)();
                                var node = Halogen_VDom_Machine.extract(v3);
                                Data_Functor["void"](Control_Monad_Eff.functorEff)(DOM_Node_Node.appendChild(node)(DOM_HTML_Types.htmlElementToNode(container)))();
                                return {
                                    machine: v3,
                                    node: node,
                                    renderChildRef: v2
                                };
                            };
                        };
                        if (v1 instanceof Data_Maybe.Just) {
                            return function __do() {
                                Control_Monad_Eff_Ref.writeRef(v1.value0.renderChildRef)(child)();
                                var v2 = DOM_Node_Node.parentNode(v1.value0.node)();
                                var v3 = DOM_Node_Node.nextSibling(v1.value0.node)();
                                var v4 = Halogen_VDom_Machine.step(v1.value0.machine)(v)();
                                var newNode = Halogen_VDom_Machine.extract(v4);
                                Control_Applicative.when(Control_Monad_Eff.applicativeEff)(Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean)))(Unsafe_Reference.unsafeRefEq)(v1.value0.node)(newNode))(substInParent(newNode)(v3)(v2))();
                                return {
                                    machine: v4,
                                    node: newNode,
                                    renderChildRef: v1.value0.renderChildRef
                                };
                            };
                        };
                        throw new Error("Failed pattern match at Halogen.VDom.Driver line 121, column 5 - line 137, column 80: " + [ v1.constructor.name ]);
                    };
                };
            };
        };
        return {
            render: render,
            renderChild: Control_Category.id(Control_Category.categoryFn),
            removeChild: removeChild
        };
    };
};
var runUI = function (component) {
    return function (i) {
        return function (element) {
            return Control_Bind.bind(Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Data_Functor.map(Control_Monad_Eff.functorEff)(DOM_HTML_Types.htmlDocumentToDocument)(Control_Bind.bindFlipped(Control_Monad_Eff.bindEff)(DOM_HTML_Window.document)(DOM_HTML.window))))(function (v) {
                return Halogen_Aff_Driver.runUI(renderSpec(v)(element))(component)(i);
            });
        };
    };
};
module.exports = {
    runUI: runUI
};
